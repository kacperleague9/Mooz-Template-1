{include file='header.tpl'}
{include file='navbar.tpl'}

<div class="container">
    <div class="card card-news">
        <div class="card-header">
            <span class="card-title">
                {$EDITING_POST}
            </span>
        </div>
        <div class="card-body" id="post-edit">
            <div class="container">
                <form action="" method="post" id="form-post-edit">
                  {if isset($EDITING_TOPIC)}
                    <div class="form-group">
                        <label for="name">Topic Title:</label>
                        <input type="text" name="title" class="form-control" id="title" placeholder="{$TOPIC_TITLE}" value="{$TOPIC_TITLE}" maxlength="64" minlength="3">
                    </div>
                    {if count($LABELS)}
                        <div class="form-group">
                            {foreach from=$LABELS item=label}
                                <input type="radio" name="topic_label" id="forumselect-{$label.id}" value="{$label.id}">
                                <label for="forumselect-{$label.id}">{$label.html}</label>
                            {/foreach}
                        </div>
                    {/if}
                  {/if}
                  {if isset($MARKDOWN)}
                    <div class="field">
                      <label for="markdown">Content:</label>
                      <textarea name="content" id="markdown"></textarea>
                    </div>
                  {else}
                    <div class="field">
                      <label for="editor">Content:</label>
                      <textarea name="content" id="editor">{$CONTENT}</textarea>
                    </div>
                  {/if}
                  <input type="hidden" name="token" value="{$TOKEN}">
                  <input type="submit" class="btn btn-primary" value="{$SUBMIT}">
                  <a class="btn btn-danger" href="{$CANCEL_LINK}" onclick="return confirm('{$CONFIRM_CANCEL}')">{$CANCEL}</a>
                </form>
            </div>
        </div>
    </div>
</div>

{*
<h2 class="ui header">
  {$EDITING_POST}
</h2>

{if count($ERRORS)}
  <div class="ui error icon message">
    <i class="x icon"></i>
    <div class="content">
      <div class="header">{$ERROR_TITLE}</div>
      <ul class="list">
        {foreach from=$ERRORS item=error}
          <li>{$error}</li>
        {/foreach}
      </ul>
    </div>
  </div>
{/if}

<div class="ui padded segment" id="post-edit">
  <div class="ui stackable grid">
    <div class="ui centered row">
      <div class="ui sixteen wide tablet twelve wide computer column">
        <form class="ui form" action="" method="post" id="form-post-edit">
          {if isset($EDITING_TOPIC)}
            <div class="field">
              <label for="name">Topic Title:</label>
              <input type="text" name="title" value="{$TOPIC_TITLE}">
            </div>
            {if count($LABELS)}
              <div class="inline fields">
                <label>Label:</label>
                {foreach from=$LABELS item=label}
                  <div class="field">
                    <div class="ui radio checkbox">
                      <input type="radio" name="topic_label" id="{$label.id}" value="{$label.id}"{if $label.active} checked="checked"{/if} hidden>
                      <label for="{$label.id}">{$label.html}</label>
                    </div>
                  </div>
                {/foreach}
              </div>
            {/if}
          {/if}
          {if isset($MARKDOWN)}
            <div class="field">
              <label for="markdown">Content:</label>
              <textarea name="content" id="markdown"></textarea>
            </div>
          {else}
            <div class="field">
              <label for="editor">Content:</label>
              <textarea name="content" id="editor">{$CONTENT}</textarea>
            </div>
          {/if}
          <input type="hidden" name="token" value="{$TOKEN}">
          <input type="submit" class="ui primary button" value="{$SUBMIT}">
          <a class="ui negative button" href="{$CANCEL_LINK}" onclick="return confirm('{$CONFIRM_CANCEL}')">{$CANCEL}</a>
        </form>
      </div>
    </div>
  </div>
</div>
*}
{include file='footer.tpl'}