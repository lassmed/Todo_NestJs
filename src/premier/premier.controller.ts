import { Controller, Delete, Get, Patch, Post } from "@nestjs/common";

@Controller('premier')
export class PremierController {
  @Get()
  get(){
    console.log('get');
    return 'get';
  }
  @Post()
  post(){
    console.log('post');
    return 'post';
  }
  @Delete()
  delete(){
    console.log('delete');
    return 'delete';
  }
  @Patch()
  patch(){
    console.log('patch');
    return 'patch ';
  }

}
