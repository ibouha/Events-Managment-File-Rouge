"use server";

import { CreateEventParams, UpdateEventParams } from "@/types";
import Event from "../database/models/event.model";
import { handleError } from "../utils";
import connect from "../database";

export const createEvent = async (params: CreateEventParams) => {
  try {
    await connect();
    const event = new Event(params.event);
    await event.save();
  } catch (error) {
    handleError(error);
  }
};

export const getEventById = async (eventId: string) => {
  try {
    await connect();
    const event = await Event.findById(eventId);
    if (!event) throw new Error("User not found");
    return JSON.parse(JSON.stringify(event));
  } catch (error) {
    handleError(error);
  }
};

export const updateEvent = async ( { userId, event, path }: UpdateEventParams)=>{
  try {
    await connect()
    const eventToUpdate = await Event.findById(event._id)
    if (!eventToUpdate || eventToUpdate.organizer.toHexString() !== userId) {
      throw new Error('Unauthorized or event not found')}

  } catch (error) {
    handleError(error)
    
  }



}