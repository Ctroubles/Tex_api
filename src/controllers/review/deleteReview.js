const Review = require('../../models/review.models.js');

const deleteReview = async(id) => {
    console.log(id)
    const review = await Review.findOne({ _id: id })
    console.log(review)
    if(!review) throw 'No se ha encontrado una reseña con ese ID'
    await review.remove()
}

module.exports = deleteReview