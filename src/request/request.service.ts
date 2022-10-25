import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import web3 from 'src/config/web3Instance';
import { Wallet } from './dto/wallet.dto';

@Injectable()
export class RequestService {
  pvtKey = '0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e';

  async distribute(wallet: Wallet): Promise<boolean> {
    
    let res = false;
    const {receiver, amount} = wallet;
    const sender = web3.eth.accounts.wallet.add(this.pvtKey);

    if ((amount < 1) || (amount > 50)) {
        throw new BadRequestException;
    }
    
    try {
      await web3.eth.sendTransaction(
        {
          to: receiver,
          from: sender.address,
          value: web3.utils.toWei(amount.toString(), 'ether'),
          gas: 21000
        },
      );
      res = true;
    } catch (e) {
      console.log(e);
    }
    return res;
  }
}
