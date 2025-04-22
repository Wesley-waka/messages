import { Controller,Get,Post,Body,Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dtos';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages(){

  }

  @Post()
  createMessage(@Body() body:CreateMessageDto){
    console.log(body);
  }


  @Get('/:id')
  getMessage(@Param('id') id:string){
    console.log(id);
  }
}
