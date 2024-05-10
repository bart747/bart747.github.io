# 5 Notes on How to Design a Resilient UI

The most interesting things happen once your software is in real use.
That's when you can see what's working and what to change.

It brings us to the problem of editing an already working thing.
In the wild.
It happens all the time. Don't think you can predict the future.
You need to design your software with ease of modification in mind.

Here are some ideas on how to do that:

### Modularity

Modular UIs are easier to edit in the long run.
When your interface is divided into distinct parts, you can also separate chunks of code by following those divisions.
That way changes will be way less tedious. For instance:

1. You can just swap UI modules in an HTML or template file.
2. You can edit a module in its specific file — no need to dig into complex code that's responsible for many things.

### Embrace Foundations

If I need to pick between working on something essential or adding bells and whistles, I pick essentials.
It's just hard to be good at all of them, so why even focus on *nice-to-haves*? What usually pisses people off is fundamentals refusing to work as they should — not lack of *mustard yellow* in a color palette.

Working extra on things like clarity (intuitiveness, readability) and speed
will give you more than any neophiliac thing.

### Simplicity is Tricky

It's easy to achieve perceived simplicity and pay for it with real complexity.
For instance, you can make an intuitive UI while ignoring the clarity of its implementation.
Sooner or later it will cause all kinds of unexpected problems.
The real simplicity of an interface means neat visuals **and** clear implementation.
To achieve that, you often need to sacrifice some non-crucial features.
And remember about *YAGNI*.

### Smooth Interactions

There's an overwhelming variety of internet browsing devices on the market.
We need to think about what will make the product work smoothly on sub-average hardware and half-decent wi-fi.
People will often use your stuff at train stations, airports, or restaurants. And they will use more than one app/website at the same time. How many browser tabs do you have open right now?

(There's a good article in this matter: [Optimizing for Fan Noise](http://prog21.dadgum.com/61.html))

### Words Win

People say “a picture is like a thousand words”.
But a picture will not make a proposition as clear and precise as a well-designed sentence or phrase.
Text is also trivial to edit.
That's why I like typography — it's a tool to achieve clarity and flexibility.

Don't overthink that weird icon. If it's not obvious, the text will be better.

`2017-04-05`