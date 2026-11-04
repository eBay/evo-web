/**
 * Markup for every state on the Chat Dialog POC page. Each state is written once
 * and used twice: rendered in the demo and passed to <highlight-code>, the same
 * way <component-demo> uses Skin story HTML.
 *
 * The chat-dialog and chat-message classes do not exist in Skin yet. Their
 * stand-in styles live in chat-dialog+page.marko.
 */
export interface ChatDialogState {
  id: string;
  title: string;
  changes: string[];
  html: string;
}

const icon = (id: string) =>
  `<svg class="icon icon--16" aria-hidden="true"><use href="#icon-${id}-16"></use></svg>`;

const assistantAvatar = `<span class="avatar avatar--32 avatar--teal" aria-hidden="true">${icon("ai")}</span>`;

const en = {
  minimize: "Minimize chat",
  close: "Close chat",
  attach: "Add attachment",
  message: "Message",
  send: "Send message",
  stop: "Stop response",
  placeholder: "Type your message",
  hint: "Press Enter to send, Shift+Enter for a new line.",
};

const ar = {
  minimize: "تصغير الدردشة",
  close: "إغلاق الدردشة",
  attach: "إضافة مرفق",
  message: "رسالة",
  send: "إرسال الرسالة",
  stop: "إيقاف الرد",
  placeholder: "اكتب رسالتك",
  hint: "اضغط Enter للإرسال، وShift+Enter لسطر جديد.",
};

function header({
  titleId,
  title,
  subtitle,
  avatar = assistantAvatar,
  minimize = true,
  labels = en,
}: {
  titleId: string;
  title: string;
  subtitle: string;
  avatar?: string;
  minimize?: boolean;
  labels?: typeof en;
}) {
  return `<div class="chat-dialog__header">
  ${avatar}
  <div class="chat-dialog__heading">
    <h2 class="chat-dialog__title" id="${titleId}">${title}</h2>
    <p class="chat-dialog__subtitle">${subtitle}</p>
  </div>
  ${minimize ? `<button class="icon-btn icon-btn--transparent chat-dialog__minimize" type="button" aria-label="${labels.minimize}">${icon("chevron-down")}</button>` : ""}
  <button class="icon-btn icon-btn--transparent chat-dialog__close" type="button" aria-label="${labels.close}">${icon("close")}</button>
</div>`;
}

function composer({
  hintId,
  send,
  attachments = "",
  labels = en,
}: {
  hintId: string;
  send: "empty" | "ready" | "stop";
  attachments?: string;
  labels?: typeof en;
}) {
  const action =
    send === "stop"
      ? `<!-- Stop replaces Send in the same slot so the tab stop does not move. -->
    <button class="icon-btn chat-dialog__stop" type="button" aria-label="${labels.stop}">${icon("stop")}</button>`
      : `<button class="icon-btn chat-dialog__send" type="submit" aria-label="${labels.send}"${send === "empty" ? ' aria-disabled="true"' : ""}>${icon("arrow-up")}</button>`;

  return `<form class="chat-dialog__composer">
  ${attachments}
  <div class="chat-dialog__row">
    <button class="icon-btn chat-dialog__attach" type="button" aria-label="${labels.attach}">${icon("add")}</button>
    <span class="textbox"><textarea class="textbox__control" rows="1" aria-label="${labels.message}" aria-describedby="${hintId}" placeholder="${labels.placeholder}"></textarea></span>
    ${action}
  </div>
  <p class="chat-dialog__hint" id="${hintId}">${labels.hint}</p>
</form>`;
}

const status = (text = "") =>
  `<p class="chat-dialog__status" role="status">${text}</p>`;

const suggestions = (items: string[], label = "Suggested replies") =>
  `<ul class="chat-dialog__suggestions" aria-label="${label}">
  ${items.map((item) => `<li><button class="chat-dialog__suggestion" type="button">${item}</button></li>`).join("\n  ")}
</ul>`;

const timeMeta = (iso: string, label: string, extra = "") =>
  `<div class="chat-message__meta"><time datetime="${iso}">${label}</time>${extra}</div>`;

const incoming = ({
  content,
  said = "Assistant said: ",
  sender = "eBay Assistant",
  avatar = assistantAvatar,
  meta = "",
  actions = "",
  tag = "p",
}: {
  content: string;
  said?: string;
  sender?: string;
  avatar?: string;
  meta?: string;
  actions?: string;
  tag?: "p" | "div";
}) => `<li class="chat-message chat-message--incoming">
  ${avatar}
  <div class="chat-message__body">
    <span class="chat-message__sender">${sender}</span>
    <${tag} class="chat-message__text" dir="auto"><span class="clipped">${said}</span>${content}</${tag}>
    ${meta}
    ${actions}
  </div>
</li>`;

const outgoing = ({
  content,
  said = "You said: ",
  meta = "",
  modifier = "",
}: {
  content: string;
  said?: string;
  meta?: string;
  modifier?: string;
}) => `<li class="chat-message chat-message--outgoing${modifier}">
  <div class="chat-message__body">
    <p class="chat-message__text" dir="auto"><span class="clipped">${said}</span>${content}</p>
    ${meta}
  </div>
</li>`;

const messageActions = `<div class="chat-message__actions" role="group" aria-label="Message actions">
  <button class="icon-btn icon-btn--transparent icon-btn--small" type="button" aria-label="Copy message">${icon("copy")}</button>
  <button class="icon-btn icon-btn--transparent icon-btn--small" type="button" aria-label="Good response" aria-pressed="false">${icon("thumb-up")}</button>
  <button class="icon-btn icon-btn--transparent icon-btn--small" type="button" aria-label="Bad response" aria-pressed="false">${icon("thumb-down")}</button>
  <button class="icon-btn icon-btn--transparent icon-btn--small" type="button" aria-label="Regenerate response">${icon("refresh")}</button>
</div>`;

const log = (
  messages: string,
  { busy = false, label = "Conversation", after = "" } = {},
) => `<div class="chat-dialog__log" role="log" aria-label="${label}"${busy ? ' aria-busy="true"' : ""} tabindex="0">
  <ol class="chat-dialog__messages">
    ${messages}
  </ol>
  ${after}
</div>`;

export const chatDialogStates: ChatDialogState[] = [
  {
    id: "chat-dialog-launcher",
    title: "Launcher (closed)",
    changes: [
      "Only a button exists. The dialog is not in the DOM or is closed.",
      '<code>aria-haspopup="dialog"</code> and an <code>aria-label</code> that carries the unread count. The visible "Chat" and the badge are <code>aria-hidden</code>, so the count is announced once.',
    ],
    html: `<button class="btn btn--primary chat-launcher" type="button" aria-haspopup="dialog" aria-label="Chat, 2 unread messages">
  ${icon("chat")}
  <span aria-hidden="true">Chat</span>
  <span class="badge" aria-hidden="true">2</span>
</button>`,
  },
  {
    id: "chat-dialog-default",
    title: "Default (open, non-modal)",
    changes: [
      'Baseline. <code>&lt;dialog aria-modal="false"&gt;</code> labelled by its title, so the page stays reachable. Opened with <code>.show()</code>.',
      'The transcript is <code>role="log"</code> with <code>tabindex="0"</code> so it scrolls by keyboard. Messages are <code>&lt;li&gt;</code> items, and the sender is <code>.clipped</code> text, not colour.',
      "Message actions are a labelled group, and the thumbs use <code>aria-pressed</code>. Suggested replies are a labelled list of buttons.",
      'An empty <code>role="status"</code> exists up front. Send is <code>aria-disabled="true"</code> because the textarea is empty.',
    ],
    html: `<dialog class="chat-dialog" aria-labelledby="cd-title-default" aria-modal="false" open>
  ${header({ titleId: "cd-title-default", title: "eBay Assistant", subtitle: "Automated assistant" })}
  ${log(
    `<li class="chat-dialog__separator"><time datetime="2026-10-09">Today</time></li>
    ${incoming({ content: "Hi Alex, I can help with orders, returns and listings. What do you need?", meta: timeMeta("2026-10-09T10:02", "10:02 AM") })}
    ${outgoing({ content: "Where is my order 27-11042-83916?", meta: timeMeta("2026-10-09T10:03", "10:03 AM", "<span>Sent</span>") })}
    ${incoming({
      tag: "div",
      content: `<p>Your order shipped on October 7 and is due by October 11.</p>
        <ul>
          <li>Carrier: UPS</li>
          <li><a href="https://www.ebay.com/">Track package</a></li>
        </ul>`,
      meta: timeMeta("2026-10-09T10:03", "10:03 AM"),
      actions: messageActions,
    })}`,
    {
      after: suggestions([
        "Start a return",
        "Contact the seller",
        "Talk to a person",
      ]),
    },
  )}
  <!-- Persistent live region: it exists before its text changes. Empty here. -->
  ${status()}
  ${composer({ hintId: "cd-hint-default", send: "empty" })}
</dialog>`,
  },
  {
    id: "chat-dialog-welcome",
    title: "Welcome (empty)",
    changes: [
      "The log holds a single incoming message. No date separator, no timestamp, no message actions.",
      "Suggested replies are the only call to action. Everything else is unchanged from the default.",
    ],
    html: `<dialog class="chat-dialog" aria-labelledby="cd-title-welcome" aria-modal="false" open>
  ${header({ titleId: "cd-title-welcome", title: "eBay Assistant", subtitle: "Automated assistant" })}
  ${log(incoming({ content: "Hi Alex, how can I help today?" }), {
    after: suggestions(["Track an order", "Start a return", "Selling help"]),
  })}
  ${status()}
  ${composer({ hintId: "cd-hint-welcome", send: "empty" })}
</dialog>`,
  },
  {
    id: "chat-dialog-streaming",
    title: "Streaming response",
    changes: [
      'The log gains <code>aria-busy="true"</code> so partial text is not announced token by token. It flips to <code>false</code> when the message completes.',
      'The last incoming message has no timestamp or actions yet. The <code>role="status"</code> now reads "Assistant is typing", outside the log so it is announced once.',
      'The Send button is replaced in the same slot by Stop (<code>aria-label="Stop response"</code>), so the tab stop does not move.',
    ],
    html: `<dialog class="chat-dialog" aria-labelledby="cd-title-streaming" aria-modal="false" open>
  ${header({ titleId: "cd-title-streaming", title: "eBay Assistant", subtitle: "Automated assistant" })}
  <!-- aria-busy="true" while tokens stream. Flip it to "false" when the message is complete. -->
  ${log(
    `${outgoing({ content: "Can I return an item after 30 days?", meta: timeMeta("2026-10-09T10:10", "10:10 AM", "<span>Sent</span>") })}
    ${incoming({ content: "It depends on the seller's return policy. Most listings allow returns for" })}`,
    { busy: true },
  )}
  <!-- The typing text lives outside the log so it is announced once, not appended. -->
  ${status("Assistant is typing")}
  ${composer({ hintId: "cd-hint-streaming", send: "stop" })}
</dialog>`,
  },
  {
    id: "chat-dialog-error",
    title: "Failed message, offline notice and attachment",
    changes: [
      'A <code>.chat-dialog__notice</code> with an <code>inline-notice</code> and <code>role="alert"</code> sits above the log, because the failure blocks sending. Transient states would use <code>role="status"</code>.',
      'The outgoing message gets <code>chat-message--error</code>. Its meta line shows the text "Not sent" and a Retry button instead of time and "Sent".',
      "The composer gains an attachments list, and each remove button's name includes the file name. Send loses <code>aria-disabled</code> because there is something to send.",
    ],
    html: `<dialog class="chat-dialog" aria-labelledby="cd-title-error" aria-modal="false" open>
  ${header({ titleId: "cd-title-error", title: "eBay Assistant", subtitle: "Automated assistant" })}
  <div class="chat-dialog__notice">
    <div class="inline-notice inline-notice--attention" role="alert">
      <span class="inline-notice__header">
        <svg class="icon icon--16" role="img" aria-label="Attention"><use href="#icon-attention-filled-16"></use></svg>
      </span>
      <span class="inline-notice__main">
        <p>Connection lost. Reconnecting. Your messages will send when you are back online.</p>
      </span>
    </div>
  </div>
  ${log(
    outgoing({
      modifier: " chat-message--error",
      content: "Here is a photo of the damage.",
      meta: `<div class="chat-message__meta"><span>Not sent</span><button class="fake-link" type="button">Retry</button></div>`,
    }),
  )}
  ${status()}
  ${composer({
    hintId: "cd-hint-error",
    send: "ready",
    attachments: `<ul class="chat-dialog__attachments" aria-label="Attachments">
    <li class="chat-dialog__attachment">
      ${icon("image")}
      <span>damage-photo.jpg</span>
      <button class="icon-btn icon-btn--transparent icon-btn--small" type="button" aria-label="Remove damage-photo.jpg">${icon("close")}</button>
    </li>
  </ul>`,
  })}
</dialog>`,
  },
  {
    id: "chat-dialog-ended",
    title: "Conversation ended",
    changes: [
      'The composer form is removed and replaced by <code>.chat-dialog__ended</code> with a "Start a new chat" button, so no textarea remains to focus.',
      "The end is recorded in the log as a separator item with a <code>&lt;time&gt;</code>, so it is announced and stays in the transcript.",
      'A human agent: the avatar shows an initial instead of the assistant icon, and the subtitle reads "Support agent" rather than "Automated assistant".',
    ],
    html: `<dialog class="chat-dialog" aria-labelledby="cd-title-ended" aria-modal="false" open>
  ${header({
    titleId: "cd-title-ended",
    title: "Sam from eBay Support",
    subtitle: "Support agent",
    avatar: `<span class="avatar avatar--32 avatar--orange" aria-hidden="true">S</span>`,
  })}
  ${log(
    `${incoming({
      sender: "Sam",
      said: "Sam said: ",
      avatar: `<span class="avatar avatar--32 avatar--orange" aria-hidden="true">S</span>`,
      content: "Your refund has been issued. Anything else I can help with?",
    })}
    <li class="chat-dialog__separator">Sam ended the conversation at <time datetime="2026-10-09T10:24">10:24 AM</time></li>`,
  )}
  ${status()}
  <div class="chat-dialog__ended">
    <button class="btn btn--primary" type="button">Start a new chat</button>
  </div>
</dialog>`,
  },
  {
    id: "chat-dialog-rtl",
    title: "RTL",
    changes: [
      'The structure is identical. The wrapper adds <code>dir="rtl"</code> and <code>lang="ar"</code>, and all visible and accessible strings are translated.',
      'Message text keeps <code>dir="auto"</code>, so mixed Arabic and Latin content (the order number) orders itself correctly.',
    ],
    html: `<div dir="rtl" lang="ar">
  <dialog class="chat-dialog" aria-labelledby="cd-title-rtl" aria-modal="false" open>
    ${header({ titleId: "cd-title-rtl", title: "مساعد eBay", subtitle: "مساعد آلي", labels: ar })}
    ${log(
      `${incoming({ said: "قال المساعد: ", sender: "مساعد eBay", content: "مرحبا، كيف يمكنني مساعدتك؟" })}
      ${outgoing({ said: "قلت: ", content: "أين طلبي؟ Order 27-11042-83916", meta: `<div class="chat-message__meta"><span>تم الإرسال</span></div>` })}`,
      { label: "المحادثة" },
    )}
    ${status()}
    ${composer({ hintId: "cd-hint-rtl", send: "empty", labels: ar })}
  </dialog>
</div>`,
  },
  {
    id: "chat-dialog-fullscreen",
    title: "Full-screen (modal)",
    changes: [
      "The <code>chat-dialog--fullscreen</code> modifier is added and <code>aria-modal</code> is dropped, because <code>.showModal()</code> supplies the focus trap and inert page.",
      "The minimize button is removed in this POC (a modal has no smaller state). That is a design choice, not a requirement.",
      'A "New messages" button sits in the log. It appears only when the user has scrolled up and new messages arrived.',
    ],
    html: `<!-- Native modal dialog: no aria-modal needed. Focus trap and inert page come from showModal(). -->
<dialog class="chat-dialog chat-dialog--fullscreen" aria-labelledby="cd-title-fullscreen" open>
  ${header({ titleId: "cd-title-fullscreen", title: "eBay Assistant", subtitle: "Automated assistant", avatar: "", minimize: false })}
  ${log(incoming({ content: "Hi Alex, how can I help today?" }), {
    after: `<button class="btn btn--secondary btn--small chat-dialog__scroll-latest" type="button">
    ${icon("chevron-down")}
    New messages
  </button>`,
  })}
  ${status()}
  ${composer({ hintId: "cd-hint-fullscreen", send: "empty" })}
</dialog>`,
  },
];
