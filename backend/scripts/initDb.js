const initModels = require('../models');

async function initializeDatabase() {
    try {
        const models = await initModels;
        
        // Sync all models with database
        await models.sequelize.sync({ force: true });
        console.log('Database synchronized successfully');

        // Create admin user
        const adminUser = await models.User.create({
            name: 'Admin User',
            email: 'admin@cognetra.com',
            password: 'admin123',
            role: 'admin'
        });
        console.log('Admin user created successfully');

        // Create some initial services
        const services = [
            {
                title: 'Search Engine Optimization',
                description: 'Boost your website\'s visibility in search results',
                features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Link Building'],
                icon: 'search'
            },
            {
                title: 'Social Media Management',
                description: 'Engage with your audience across social platforms',
                features: ['Content Creation', 'Community Management', 'Analytics', 'Paid Advertising'],
                icon: 'share'
            }
        ];

        await models.Service.bulkCreate(services);
        console.log('Initial services created successfully');

        // Create a sample blog post
        await models.Blog.create({
            title: 'Welcome to Cognetra',
            content: 'This is our first blog post. Stay tuned for more content!',
            authorId: adminUser.id,
            image: '/images/welcome.jpg',
            tags: ['welcome', 'digital marketing'],
            metaDescription: 'Welcome to Cognetra - Your Digital Marketing Partner'
        });
        console.log('Sample blog post created successfully');

        console.log('Database initialization completed successfully');
    } catch (error) {
        console.error('Error initializing database:', error);
    } finally {
        process.exit();
    }
}

initializeDatabase();
