# Time Accessibility

![Time left on eBay auction page](https://2555990442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LXQc7GhOtVRa7Lw1InO%2F-LXQcCeGbjZ8h00A2PcZ%2F-LXQcI8NwaZFbbLo1Fx7%2Ftimer.png?generation=1548799262347179&alt=media)

### Introduction

Time-based patterns can be used to indicate the elapsed time from a start point (stopwatch), the time remaining until an end point (timer), or simply the current time (clock).

For sighted users, a clock, timer or stopwatch will update every second visually. For non-sighted users we must be careful **not** to convey this 'ticking' of the timer aurally.

### Working Examples

Experience the pattern in action on our companion [eBay MIND Patterns examples website](https://ebay.github.io/mindpatterns/messaging/time).

### Best Practices

Screen reader **must not** announce updates every second because this creates too much noise and distraction.

We must audibly convey only the most important thresholds. For example "30 seconds left".

Announcements must be spaced _at least_ 15 seconds apart. This will give the screen reader enough time to announce the new value, even on the slowest screen reader speech rate, in any language.

### Interaction Design

#### Keyboard

As the time pattern contains no interactive elements, there are no specific call-outs for keyboard interaction.

#### Screen Reader

Without losing their current point of focus, the screen reader must be alerted of any _critical_ points in the passage of time.
