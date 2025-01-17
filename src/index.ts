import isEqual from '@/is-equal';
// src/index.ts
import Bank from './models/bank';
import Account from './models/bank-account';
import User from './models/user';
import TransactionService from './services/TransactionService';


export default function isEqualChecker(obj1, obj2) {
  return isEqual(obj1, obj2);
}