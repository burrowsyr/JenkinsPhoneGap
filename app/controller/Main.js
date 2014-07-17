Ext.define('JenkinsPhoneGap.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            openUrlButton: 'button[action=openUrl]'
        },
        control: {
            openUrlButton: {
                tap: 'onOpenUrlTap'
            }
        }
    },

    onOpenUrlTap: function (button) {
        window.open(button.link, '_blank');
    }
});