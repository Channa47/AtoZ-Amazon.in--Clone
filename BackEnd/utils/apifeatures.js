class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
            //case insensetive
          },
        }
      : {};
    // console.log(keyword);

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    //Removing some fields for category
    const removeFields = ["keyword", "page", "limit"];
    removeFields.forEach((key) => delete queryCopy[key]);

    //Filter for Price and Rating

    let queryStr = JSON.stringify(queryCopy); //to make string
    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (replace) => `$${replace}`
    );

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }
  pagination(resultPerPage){
    const currentPage=Number(this.queryStr.page)||1;  //50-10

    const skip=resultPerPage * (currentPage-1);
    this.query=this.query.limit(resultPerPage).skip(skip)
    return this;
  }
}
module.exports = ApiFeatures;
