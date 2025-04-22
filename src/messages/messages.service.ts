import {Injectable} from '@nestjs/common';
import { MessagesRepository } from "./message.repository";

@Injectable()
export class MessagesService{
  messagesRepo: MessagesRepository;


  constructor(){
    //service is creating its own dependencies
    // DONT DO THIS ON REAL APPS
    this.messagesRepo = new MessagesRepository();
  }

  async findOne(id: string){
    return this.messagesRepo.findOne(id);
  }

  findAll(){
    return this.messagesRepo.findAll();
  }

  create(content: string){
    return this.messagesRepo.create(content);
  }
}