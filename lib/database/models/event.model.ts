import {Document, Schema, Types, model, models} from "mongoose";

export interface IEvent extends Document {
    _id: string;
    title: string;
    description?: string;
    location?: string;
    createdAt: Date;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    price?: string;
    isFree: boolean;
    url?: string;
    category?: {_id: string,name: string};
    organizer: {_id: string,firstName: string , LastName: string};
}


const EventSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    location: {type: String},
    createdAt: {type:Date , default: new Date},
    imageUrl: {type: String , required: true},
    startDateTime: {type:Date , default: new Date},
    endDateTime: {type:Date , default: new Date},
    price: {type: String},
    isFree: {type: Boolean, default: false},
    url: {type: String},
    category: {type:Schema.Types.ObjectId, ref:"Category"},
    organizer: {type:Schema.Types.ObjectId,ref:"User"}
  
});


const Event = models.User || model("Event", EventSchema);

export default Event;