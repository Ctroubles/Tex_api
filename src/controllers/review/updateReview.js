const Review = require('../../models/review.models.js');

const updateReview = async(id, data) => {
    console.log(id)
    console.log(data)
    const review = await Review.findOne({ _id: id });
    console.log(1)
    console.log(review)
    console.log(2)
    if(!review) throw 'No se ha encontrado un review con ese ID'
    review.email = data.email;
    review.userCategory = data.userCategory;
    review.review = data.review;
    review.componentId = data.componentId;
    console.log(review)
    return await review.save().catch(e => console.log(e));
}

module.exports = updateReview