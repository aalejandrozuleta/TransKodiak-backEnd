import { forgetPasswordDto } from '@dto/general/forgetPassword';
import { ERROR_MESSAGE } from './utils/messagesError';
import { hashPassword } from '@helpers/password/hashPassword';
import { forgetPasswordRepository } from '@repositories/general/forgetPassword';
import { getTokenCode } from '@helpers/redis/getTokenCode';

export const forgetPasswordService = async (userData: forgetPasswordDto) => {
  const searchRedis = await getTokenCode(userData.email).catch(
    (errorGetToken) => {
<<<<<<< HEAD
      console.log(errorGetToken);
=======
      console.error(errorGetToken);
>>>>>>> main
      throw new Error(ERROR_MESSAGE.FORGET_PASSWORD_REDIS_ERROR);
    },
  );

  if (searchRedis.code === userData.code) {
    const hashedPassword = await hashPassword(userData.password_user).catch(
      (errorHashPassword) => {
<<<<<<< HEAD
        console.log(errorHashPassword);
=======
        console.error(errorHashPassword);
>>>>>>> main
        throw new Error(ERROR_MESSAGE.HASH_PASSWORD_FAILED);
      },
    );
    userData.password_user = hashedPassword;
<<<<<<< HEAD
    await forgetPasswordRepository
      .forgetPassword(userData)
      .catch((errorForgetPassword) => {
        console.log(errorForgetPassword);
=======
    userData.id_user = searchRedis.id;

    await forgetPasswordRepository
      .forgetPassword(userData)
      .catch((errorForgetPassword) => {
        console.error(errorForgetPassword);
>>>>>>> main
        throw new Error(ERROR_MESSAGE.DB_ERROR);
      });
  } else {
    throw new Error(ERROR_MESSAGE.FORGET_PASSWORD_CODE_INVALID);
  }
};
