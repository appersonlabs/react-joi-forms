
/**
 * Entry point for test setup code.
 *
 * Require all your setup modules here while enforcing the order between them.
 */

require('./component-mounting.js');

// The sandbox should be cleared after the component has unmounted.
require('./sandbox.js');

require('./chai.js');
