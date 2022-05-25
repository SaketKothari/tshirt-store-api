// base - Product.find()
// base - Product.find(email: {"one@node.dev"})

//bigQ - search=coder&page=2&category=shortsleeves&rating[gte]=4&price[lte]=999&price[gte]=199&limit=5  (It is coming as stringified object)

class WhereClause {
  constructor(base, bigQ) {
    this.base = base;
    this.bigQ = bigQ;
  }

  search() {
    const searchword = this.bigQ.search
      ? {
          name: {
            $regex: this.bigQ.search,
            $options: 'i',
          },
        }
      : {};

    // inject inside product.find
    this.base = this.base.find({ ...searchword });
    return this;
  }

  pager(resultperPage) {
    let currentPage = 1;
    if (this.bigQ.page) {
      currentPage = this.bigQ.page;
    }

    const skipVal = resultperPage * (currentPage - 1);

    this.base = this.base.limit(resultperPage).skip(skipVal);
    return this;
  }
}
