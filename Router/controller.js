import StudentModel from '../Schema/schema.js'

class Studentcontroller {
    static getAllDoc = async (req, res) => {
        try {
            const result = await StudentModel.find()
            res.render('Addstudent', { data: result })
        } catch (error) {
            console.log(error)
        }
    }
    static createDoc = async (req, res) => {
        try {
            const doc = new StudentModel({
                name: req.body.name,
                age: req.body.age,
                fees: req.body.fees
            })
            const result = await doc.save()

        } catch (error) {
            console.log(error)
        }
        res.redirect('/')
    }
    static findById = async (req, res) => {
        try {
            const result = await StudentModel.findById(req.params.id);
            res.render('Update', { data: result })
        } catch (error) {
            console.log(error)
        }
    }
    static findAndUpdate = async (req, res) => {
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            // console.log(result)
        } catch (error) {
            console.log(error)
        }
        res.redirect('/')
    }
    static deleteByID = async (req, res) => {
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }
}

export default Studentcontroller;