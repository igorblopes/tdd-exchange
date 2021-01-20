import { Injectable, InternalServerErrorException } from '@nestjs/common';

export class CurrenciesRepository{
    async getCurrency(currency:string):Promise<any> {}
}



@Injectable()
export class CurrenciesService {

    constructor(private correnciesRepository: CurrenciesRepository){

    }

    async getCurrency(currency:string):Promise<any> {
        try{
            return await this.correnciesRepository.getCurrency(currency);
        }catch(error){
            throw new InternalServerErrorException();
        }
    }

}
