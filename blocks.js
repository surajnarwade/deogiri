Blockly.Blocks['version'] = {
  init: function() {
    this.appendStatementInput("version")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("2"), "version");
    this.setInputsInline(true);
    this.setColour(150);
    this.setTooltip('version 2');
    this.setHelpUrl('https://docs.docker.com/compose/compose-file/compose-file-v2/');
  }
};

Blockly.Blocks['service_name'] = {
  init: function() {
    this.appendStatementInput("service_name")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("web"), "service_name");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
    this.setColour(170);
    this.setTooltip('service name goes here');
    this.setHelpUrl('https://docs.docker.com/compose/compose-file/compose-file-v2/#service-configuration-reference');
  }
};

Blockly.Blocks['image_name'] = {
  init: function() {
    this.appendValueInput("image_name")
        .setCheck("String")
        .appendField("image");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Image name goes here');
    this.setHelpUrl('https://docs.docker.com/compose/compose-file/compose-file-v2/#image');
  }
};

Blockly.Blocks['ports'] = {
init: function() {
    this.appendStatementInput("ports")
        .setCheck(null)
        .appendField("ports");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('https://docs.docker.com/compose/compose-file/compose-file-v2/#ports');
  }
};


Blockly.Blocks['page_text'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(300);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Your text."), "page_text");
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};

Blockly.Blocks['restart'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("restart")
        .appendField(new Blockly.FieldTextInput("always"), "restart");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['container_name'] = {
  init: function() {
    this.appendValueInput("container_name")
        .setCheck(null)
        .appendField("container_name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['labels'] = {
  init: function() {
    this.appendStatementInput("labels")
        .setCheck(null)
        .appendField("labels");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['label_output'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("your label"), "label_output");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['your_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("your text"), "your_text");
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['environment'] = {
  init: function() {
    this.appendStatementInput("environment")
        .setCheck(null)
        .appendField("environment");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('https://docs.docker.com/compose/compose-file/compose-file-v2/#environment');
  }
};

Blockly.Blocks['args'] = {
init: function() {
    this.appendStatementInput("args")
        .setCheck(null)
        .appendField("args");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('https://docs.docker.com/compose/compose-file/compose-file-v2/#ports');
  }
};

Blockly.Blocks['env_file'] = {
  init: function() {
    this.appendValueInput("env_file")
        .setCheck("String")
        .appendField("env_file");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Image name goes here');
    this.setHelpUrl('https://docs.docker.com/compose/compose-file/compose-file-v2/#image');
  }
};

Blockly.Blocks['links'] = {
  init: function() {
    this.appendStatementInput("links")
        .setCheck(null)
        .appendField("links");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['cap_add'] = {
  init: function() {
    this.appendStatementInput("cap_add")
        .setCheck(null)
        .appendField("cap_add");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['cap_drop'] = {
  init: function() {
    this.appendStatementInput("cap_drop")
        .setCheck(null)
        .appendField("cap_drop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};