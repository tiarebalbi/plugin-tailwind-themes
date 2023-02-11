import { createApp } from 'vite';
import plugin from '../index';

describe('Tailwind Theme Plugin', () => {
    let app;

    beforeEach(async () => {
        app = await createApp({
            plugins: [
                plugin
            ]
        });
    });

    afterEach(() => {
        app = null;
    });

    it('should compile a custom Tailwind CSS configuration for the default theme', async () => {
        const config = await app.getConfig({ theme: 'default' });
        expect(config).toMatchSnapshot();
    });

    it('should compile a custom Tailwind CSS configuration for the dark theme', async () => {
        const config = await app.getConfig({ theme: 'dark' });
        expect(config).toMatchSnapshot();
    });

    it('should throw an error when an invalid theme is provided', async () => {
        await expect(app.getConfig({ theme: 'invalid' })).rejects.toThrowError('Invalid theme: "invalid"');
    });
});
