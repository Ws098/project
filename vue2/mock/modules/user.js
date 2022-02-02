import Mock from 'mockjs';

const login = {
    url: process.env.VUE_APP_BASE_API + 'user/login',
    type: 'post',
    response: () => {
        console.log(" login response");
        return {
            code: 200,
            data: {
                code: Mock.mock('@string("number", 6)')
            }
        }
    }
};

export default {
  login
}