-- Assistio website database (MySQL/MariaDB)
--
-- This website is a static HTML site and does NOT require a database to run.
-- This .sql file is provided to satisfy hosts/migration tools that require a database upload
-- and to give you a ready schema if you later switch from Formspree to storing contact leads
-- in your own database.
--
-- Charset: utf8mb4 (supports Arabic + emojis)

SET NAMES utf8mb4;
SET time_zone = '+00:00';

-- -----------------------------------------------------------------------------
-- Table: contact_messages
-- Stores messages submitted via the "Send a message" form (Name, Email, Company, Message)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `contact_messages` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(120) NOT NULL,
  `email` VARCHAR(190) NOT NULL,
  `company` VARCHAR(190) NULL,
  `message` TEXT NOT NULL,
  `source` VARCHAR(50) NOT NULL DEFAULT 'website_contact_form',
  `page_url` VARCHAR(512) NULL,
  `language` VARCHAR(10) NULL,
  `ip_address` VARCHAR(45) NULL,
  `user_agent` VARCHAR(255) NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_contact_created_at` (`created_at`),
  KEY `idx_contact_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- Table: booking_requests
-- Optional: if you later collect booking requests in your own system (instead of only Google)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `booking_requests` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(120) NOT NULL,
  `email` VARCHAR(190) NOT NULL,
  `company` VARCHAR(190) NULL,
  `channel` VARCHAR(30) NULL,
  `preferred_time` VARCHAR(120) NULL,
  `notes` TEXT NULL,
  `status` ENUM('new','contacted','scheduled','closed') NOT NULL DEFAULT 'new',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_booking_status` (`status`),
  KEY `idx_booking_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- Table: site_events
-- Optional: lightweight event logging (e.g., button clicks) if you later add a backend
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `site_events` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `event_name` VARCHAR(80) NOT NULL,
  `event_data` LONGTEXT NULL,
  `page_url` VARCHAR(512) NULL,
  `referrer` VARCHAR(512) NULL,
  `ip_address` VARCHAR(45) NULL,
  `user_agent` VARCHAR(255) NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_event_name` (`event_name`),
  KEY `idx_event_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- Table: admin_notes
-- Optional: internal notes (useful if you later add an admin dashboard)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin_notes` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(200) NOT NULL,
  `body` TEXT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_notes_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

