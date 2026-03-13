import { Router, Request, Response } from 'express';

const router = Router();

const pokemon = [
    { id: 1, name: 'Pikachu', type: 'Electric' },
    { id: 2, name: 'Charmander', type: 'Fire' },
    { id: 3, name: 'Bulbasaur', type: 'Grass' },
];

router.get('/', (req: Request, res: Response) => {
    res.json(pokemon);
});

router.get('/:id', (req: Request, res: Response) => {
    const found = pokemon.find((p) => p.id === parseInt(<string>req.params.id));

    if (!found) {
        res.status(404).json({ message: 'Pokemon not found' });
        return;
    }

    res.json(found);
});

export default router;