import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MeetingsModule } from './meetings/meetings.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://wabaulrich1234:o3wznLk4eR1axkUj@cluster0.r4vtq.mongodb.net/y-meet?retryWrites=true&w=majority'),
    AuthModule,
    UsersModule,
    MeetingsModule,
    RolesModule,
  ],
})
export class AppModule {}
