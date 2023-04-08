const mongoose = require("mongoose");
const validator = require("validator");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Title"],
    trim: true,
    minLength: [3, "please enter at  least 3 characters"],
    maxLength: [18, "Name cant bigger than 18 characters"],
  },
  url: {
    type: String,
    required: [true, "Please Enter  image url"],
    trim: true,
    validate: {
      validator: (value) =>
        validator.isURL(value, {
          protocols: ["http", "https", "ftp"],
          require_tld: true,
          require_protocol: true,
        }),
      message: "Must be a Valid URL",
    },
  },
  event_date: {
    type: Date,
    required: [true, "Please Enter event date"],
  },
  arrival_time: {
    type: String,
    required: [true, "Please Enter arrival time"],
  },
  departure_time: {
    type: String,
    required: [true, "Please Enter departure time"],
  },
  event_info: {
    type: String,
    required: [true, "Please Enter event information"],
    minLength: [15, "please enter at  least 15 characters"],
  },
  speaker: [
    {
      name: {
        type: String,
        unique: true,
        required: true,
        required: [true, "Please Enter Speaker Name"],
        minLength: [3, "please enter at  least 3 characters"],
        maxLength: [18, "Name cant bigger than 18 characters"],
      },
      img_url: {
        type: String,
        unique: true,
      },
      about: {
        type: String,
      },
      id: {
        type: String,
        unique: true,
      },
    },
  ],
  moderator: [
    {
      name: {
        type: String,
        unique: true,
        required: [true, "Please Enter Moderator Name"],
        minLength: [3, "please enter at  least 3 characters"],
        maxLength: [18, "Name cant bigger than 18 characters"],
      },
      img_url: {
        type: String,
        unique: true,
        trim: true,
      },
      about: {
        type: String,
      },
      id: {
        type: String,
        unique: true,
      },
    },
  ],
  material_resource: [
    {
      title: {
        type: String,
        required: [true, "Please Enter material and resources name or title"],
        minLength: [3, "please enter at  least 3 characters"],
        maxLength: [18, "title cant bigger than 18 characters"],
      },
      img: [
        {
          img_url: {
            type: String,
            unique: true,
            trim: true,
          },
        },
      ],
      description: {
        type: String,
        minLength: [15, "please enter atleast 15 characters"],
      },
      video: [
        {
          video_url: {
            type: String,
            unique: true,
            trim: true,
          },
        },
      ],
    },
  ],

  joining_info: [
    {
      title: {
        type: String,
        required: [true, "Please Enter Title"],
        minLength: [3, "please enter atleast 3 characters"],
        maxLength: [18, "title can't bigger than 18 characters"],
      },
      img_url: {
        type: String,
        unique: true,
        trim: true,
      },
      description: {
        type: String,
        required: [true, "Please Enter  Description"],
        minLength: [15, "please enter at  least 15 characters"],
      },

      video_url: {
        type: String,
        unique: true,
        trim: true,
      },
    },
  ],
  organized_by: {
    type: String,
    required: [true, "Please Enter organizer name"],
    minLength: [3, "please enter atleast 3 characters"],
    maxLength: [18, "title can't bigger than 18 characters"],
  },
  tags: [
    {
      tags: {
        type: String,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});



// creating model
const Event = new mongoose.model("events", eventSchema);

module.exports = Event;
