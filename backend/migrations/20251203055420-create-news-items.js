'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('news_items', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      section_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'news_sections',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      headline: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      news_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      event_start_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      event_end_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      media_urls: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      source_links: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
    });

    // Add indexes
    await queryInterface.addIndex('news_items', ['section_id']);
    await queryInterface.addIndex('news_items', ['news_date']);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('news_items');
  }
};
