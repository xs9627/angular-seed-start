'use strict';

angular.module('myApp.view1', [])

.controller('View1Ctrl', ['$scope', '$sce', function(sc, $sce) {
	
                    //hljs.configure({useBR: true});

                    sc.change = function() {
                        //sc.author = sc.code;

                        var formattedCode = hljs.highlightAuto(sc.code);
                        sc.formatted = $sce.trustAsHtml(formattedCode.value.replace(/(?:\r\n|\r|\n)/g, '<br />'));
                    }


                }]
           );