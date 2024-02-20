import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { CarSchema } from '../models/Car.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  
  // NOTE from Car Schema and ../models/Car.js
  Cars = mongoose.model('Car', CarSchema)
}

export const dbContext = new DbContext()
