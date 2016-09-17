
# Example of ng2-tag-input https://github.com/Gbuomprisco/ng2-tag-input not working with the Angular-CLI Final

# Uncaught TypeError: Cannot read property 'name' of undefined

```
zone.js:129 Uncaught TypeError: Cannot read property 'name' of undefined
exports.functionName	@	function-name.ts?6954:7
(anonymous function)	@	transformer.ts?d0de:89
dependencies	@	transformer.ts?d0de:89
(anonymous function)	@	transformer.ts?d0de:145
load	@	transformer.ts?d0de:53
exports.transform	@	transformer.ts?d0de:61
(anonymous function)	@	transformer.ts?d0de:161
transformChildren	@	transformer.ts?d0de:159
(anonymous function)	@	transformer.ts?d0de:180
load	@	transformer.ts?d0de:53
exports.transform	@	transformer.ts?d0de:61
(anonymous function)	@	transformer.ts?d0de:161
transformChildren	@	transformer.ts?d0de:159
(anonymous function)	@	transformer.ts?d0de:180
load	@	transformer.ts?d0de:53
exports.transform	@	transformer.ts?d0de:61
(anonymous function)	@	transformer.ts?d0de:161
transformChildren	@	transformer.ts?d0de:159
(anonymous function)	@	transformer.ts?d0de:180
load	@	transformer.ts?d0de:53
exports.transform	@	transformer.ts?d0de:61
exports.transformToTree	@	mutable-tree-factory.ts?f7a1:12
(anonymous function)	@	mutable-tree-factory.ts?f7a1:40
exports.createTreeFromElements	@	mutable-tree-factory.ts?f7a1:40
updateTree	@	backend.ts:65
update	@	backend.ts:90
(anonymous function)	@	backend.ts:101
SafeSubscriber.__tryOrUnsub	@	Subscriber.js?215e:223
SafeSubscriber.next	@	Subscriber.js?215e:172
Subscriber._next	@	Subscriber.js?215e:125
Subscriber.next	@	Subscriber.js?215e:89
DebounceTimeSubscriber.debouncedNext	@	debounceTime.js?500c:98
dispatchNext	@	debounceTime.js?500c:114
AsyncAction._execute	@	AsyncAction.js?e414:111
AsyncAction.execute	@	AsyncAction.js?e414:86
AsyncScheduler.flush	@	AsyncScheduler.js?ae69:36
ZoneDelegate.invokeTask	@	zone.js:225
Zone.runTask	@	zone.js:125
ZoneTask.invoke	@	zone.js:293
```


