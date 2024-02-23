import { Schema } from "mongoose";
// NOTE updating 
 export const HouseSchema = new Schema( 
    {
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
        default: ''
    },
    description: {
        type: String,
        minLength: 3
    }
},
{
    timestamps: true,
    toJSON: {
        virtuals: true
    }
}
)