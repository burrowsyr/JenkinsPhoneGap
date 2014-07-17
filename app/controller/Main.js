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
        var url = encodeURI(button.config.link);
        window.open(url, '_blank', 'location=no');
    }
});