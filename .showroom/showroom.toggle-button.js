export default {
    component: 'honey-toggle-button',
    path: '/src/components/toggle-button/ToggleButton.js',
    events: [],
    attributes: {

    },
    functions: {
        start: () => {
            dashboard.targetComponent.start();
        },
        stop: () => {
            dashboard.targetComponent.stop();
        },
        resume: () => {
            dashboard.targetComponent.resume();
        }
    }
}