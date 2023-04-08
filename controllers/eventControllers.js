const Event = require("../model/schema.js");
const ErrorHandler = require('../utils/errorHandler.js');
const catchAsyncErrors = require('../middleware/catchAsyncErrors')






exports.createEvent = catchAsyncErrors(async (req, res, next) => {
  const {
   title,
   url,
   event_date,
   arrival_time,
   departure_time,
   event_info,
   moderator_name,
   moderator_img,
   moderator_about,
   moderator_id,
   speaker_name,
   speaker_img,
   speaker_about,
   speaker_id,
   material_img,
   material_title,
   material_description,
   material_video,
   joiner_title,
   joiner_img,
   joiner_description,
   joiner_video,
   organizer,
   tags,


  } = req.body;

  const event = await Event.create(
    {
  title,
  url,
  event_date,
  arrival_time,
  departure_time,
  event_info,
  speaker:[
    {
        name: speaker_name,
        img_url:speaker_img,
        about:speaker_about,
        id:speaker_id
        
    },
  ],
   moderator:[
    {
        name: moderator_name,
        img_url:moderator_img,
        about:moderator_about,
        id:moderator_id
        
    },
  ],
  material_resource:[
    {
        title:material_title,
        img:[
            {
                img_url:material_img,
            },
        ],
        description:material_description,
        video:[
            {
                video_url:material_video,
            }
        ],

    },
  ],
  joining_info:[
    {
        title:joiner_title,
        img_url:joiner_img,
        description:joiner_description,
        video_url:joiner_video,
    },
  ],
  organized_by:organizer,
  tags:[
    {
    tags:tags,
  }],
  
  });
    res.status(200).json({
      success: true,
      event,
    });
});


//update event -- -admin

exports.updateEvent = catchAsyncErrors(async(req, res,next)=>
{
   let event = await Event.findById(req.params.id);
   if(!event){
      return  next(new ErrorHandler("Event is not found with this Id", 500))
      
   }
   event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators:true,
      useUnified:false
   });
   res.status(200).json({
      success:true,
      event
   })

})
//delete event --admin

exports.deleteEvent = catchAsyncErrors(async(req,res,next)=>{
    const event = await Event.findById(req.params.id);
    if(!event){
       return  next(new ErrorHandler("Event is not found with this Id", 500))
    }
    await event.remove();

    res.status(200).json({
       success:true,
       message:"event deleted successfully"
    })
 })


//get single product

exports.getEvent = catchAsyncErrors(async(req,res,next)=>{
    const event = await Event.findById(req.params.id);
    if(!event){
        
        return next(new ErrorHandler("Event is not found with this Id", 404));
    }
    console.log(event)

    res.status(200).json({
        success: true,
        event
    })
})
