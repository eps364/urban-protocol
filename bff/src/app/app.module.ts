import { Module } from '@nestjs/common';
import { LogModule } from './log/log.module';
import { ProtocolModule } from './protocol/protocol.module';
import { UploadModule } from './upload/upload.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    UploadModule,
    ProtocolModule,
    LogModule
  ],
})
export class AppModule { }
