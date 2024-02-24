import { Module } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { WalletAssetsService } from './wallet-asset/wallet-asset.service';
import { WalletAssetsController } from './wallet-asset/wallet-asset.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  WalletAsset,
  WalletAssetSchema,
} from './wallet-asset/wallet-asset.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WalletAsset.name, schema: WalletAssetSchema },
    ]),
  ],
  controllers: [WalletsController, WalletAssetsController],
  providers: [WalletsService, WalletAssetsService],
  exports: [WalletsService, WalletAssetsService],
})
export class WalletsModule {}
