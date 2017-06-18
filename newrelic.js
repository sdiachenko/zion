'use strict'

/**
 * New Relic agent configuration.
 *
 * See lib/config.default.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name: ['Nark (' + process.env.NODE_ENV + ')'],
  /**
   * Your New Relic license key.
   */
  license_key: '9edf769b7807bd182a8906d6c12e6320230fff24',
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info'
  }
}
