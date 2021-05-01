const Customer = require('../models/register');


module.exports.createNewregister = async (req, res) => {
    const { custName, custPhone, custMail } = req.body.customer;
    const foundCustomer = await Customer.findOne({ custPhone: custPhone });
    if (!foundCustomer) {
        const customer = new Customer({ custName, custPhone, custMail });
        customer.numOfOrders = 0;
        await customer.save();
        res.redirect(`/register/${customer._id}`);
    }
};

module.exports.renderNewregisterForm = (req, res) => {
    res.render('register/new');
};
module.exports.renderShow = (req, res) => {
    res.render('register/show');
};
module.exports.renderconfirmForm = (req, res) => {
    res.redirect('/register/show');
};



