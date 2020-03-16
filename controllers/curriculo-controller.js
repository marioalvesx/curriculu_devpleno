const CurriculoModel = require('../models/curriculo-model.js')

exports.getData = () => {
    return CurriculoModel
}

exports.getName = () => {
    return CurriculoModel.name
}

exports.getTitle = () => {
    return CurriculoModel.title
}

exports.getProfession = () => {
    return CurriculoModel.Profession
}

exports.getDescription = () => {
    return CurriculoModel.Description
}

exports.getExperience = () => {
    return CurriculoModel.Experience
}

exports.getEducation = () => {
    return CurriculoModel.Education
}

exports.getSkills = () => {
    return CurriculoModel.Skills
}