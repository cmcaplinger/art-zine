const { Schema, model} = require('mongoose');

const articleSchema = new Schema({
    title: String,
    body: String,
    author: [{ type: Schema.Types.ObjectId, ref:'Author'}]
}, {
    timestamps: true
})


const Story = model('Article', articleSchema)

module.exports = Article;