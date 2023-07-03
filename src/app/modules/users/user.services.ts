import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils';


const createUser = async (user: IUser): Promise<IUser | null> => {
  // Auto generated incremental Id
  const currentId = await generateUserId();
  user.id = currentId;


  // default Password.
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)

  if (!createdUser) {
    throw new Error('Failed to create user')
  }

  return createdUser
}

export default {
  createUser,
}
