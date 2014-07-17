Ext.define('JenkinsPhoneGap.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Button'
    ],
    config: {
        layout: {
            type: 'vbox',
            align: 'center'
        },

        padding: 20,

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'In App Browsing'
            },
            {
                xtype: 'button',
                text: 'Google.co.uk',
                action: 'openUrl',
                link: 'http://google.com'
            }
        ]
    }
});
