import { Transaction } from './Transaction';
export class Block {

    /* a list of transactions tht this block will verify */
    transactions: Array<Transaction>;
    /* hash of the previous block */
    prevHash: string;

    constructor(prevHash: string) {
        this.prevHash = prevHash;
    }

    public addTrx(): void {

    }

    public commit(): void {

    }

}