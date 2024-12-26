import { Schema, model, Document } from 'mongoose';

export interface IComment extends Document {
    post: Schema.Types.ObjectId;
    content: string;
    sender: string;
    createdAt: Date;
}

const commentSchema = new Schema<IComment>({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    sender: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Comment = model<IComment>('Comment', commentSchema);
export default Comment;
