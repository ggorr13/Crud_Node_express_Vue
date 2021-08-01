import { Router } from 'express';
import { getAll, addServer, deleteServer, updateServer } from '../controller/CrudController.js';

const router = Router();

router.get('/',(req,res) => {
    res.render('index',{
        title:'Main page',
        active:'main',
    });
})

router.get('/features',(req,res) => {
    res.render('features',{
        title:'Features Page',
        active:'features',
    });
})

router.get('/api/server', (req,res) => getAll(req,res));

router.post('/api/server', (req,res) => addServer(req,res));

router.delete('/api/server/:serverId', (req,res) => deleteServer(req,res));

router.put('/api/server/:serverId', (req,res) => updateServer(req,res));

export default router;
