const { User } = require('../models/index');

class UserRepository {
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async destory(userId) {
        try {
            await user.destory({
                where: {
                    id: userId
                }
            })

        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async getById(userId) {
        try {
            const user = await User.findByPk(userId, {
                attributes: ['email', 'id']
            })
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async getByEmail(userEmail) {
        try {
            const user = await User.findOne({
                where: {
                    userEmail: userEmail
                }
            })
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

}

module.exports = UserRepository;