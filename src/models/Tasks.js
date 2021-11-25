import { Schema, model} from 'mongoose'
import MongoosePaginate from 'mongoose-paginate-v2'

const taskSchema = new Schema ({
title: {
    type: String,
    require: true,
    trim: true
},
description: {
    type: String,
    trim: true
},
done: {
    type: Boolean,
    default: false
},
}, {
    versionKey: false,
    timestamps: true
});

taskSchema.plugin(MongoosePaginate)
export default model('Task',taskSchema)