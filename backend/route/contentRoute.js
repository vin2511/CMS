import express from 'express';

import{
    getContent,
    addContent,
    updateContent,
    delContent,
    getBycategory
} from '../controller/content.js';

const contentRouter = express.Router();

contentRouter.route('/').get(getContent);
contentRouter.route('/:category').get(getBycategory)
contentRouter.route('/add').post(addContent);
contentRouter.route('/update:id').put(updateContent)
contentRouter.route('/delete:id').delete(delContent)

export default contentRouter;