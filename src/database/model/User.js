import { DataTypes } from "sequelize";
import postgresConnection from "../connection";
import File from "./File";

const User = postgresConnection.define(
    "User",
    {
        // Model attributes are defined here
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        profile_picture_url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        underscored: true,
        timestamps: true,
        paranoid: true,
    }
);

export default User;
