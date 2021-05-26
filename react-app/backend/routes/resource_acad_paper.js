const router =  require('express').Router();
let AcademicPaper =  require('../models/resource_acad_paper.model');

router.route('/').get((req, res)=>{
    AcademicPaper.find()
        .then(resource_acad_paper => res.json(resource_acad_paper))
        .catch(err => res.status(400).json('Error: '+err)); 
});

router.route('/add').post((req, res) => {
    const _id =  req.body._id;
    const title = req.body.title;
    const author = req.body.author;
    const subject = req.body.subject;
    const year = req.body.year;
    const pagecount = req.body.pagecount;
    const resourcetype = req.body.resourcetype;
    const degreetype = req.body.degreetype;
    const institution = req.body.institution;
    const adviser = req.body.adviser;
    const keyword = req.body.keyword;
    const manuscript = req.body.manuscript;
    const abstract = req.body.abstract;
    const journal = req.body.journal;
    const poster = req.body.poster;
    const sourcecode = req.body.sourcecode;
    const displayimage = req.body.displayimage;

    const newAcademicPaper = new AcademicPaper({
        _id, title, author, subject, year, pagecount, resourcetype, degreetype,
        institution, adviser, keyword, manuscript, abstract, journal,
        poster, sourcecode, displayimage});

    newAcademicPaper.save()
        .then(resource_acad_paper => res.json('New Academic Paper Added!'))
        .catch(err => res.status(400).json('Error: '+err)); 
});

module.exports = router;