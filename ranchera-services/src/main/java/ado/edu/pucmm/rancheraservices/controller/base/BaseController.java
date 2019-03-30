package ado.edu.pucmm.rancheraservices.controller.base;

import ado.edu.pucmm.rancheraservices.helper.QBOServiceHelper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class BaseController {

    private static final Logger logger = Logger.getLogger(BaseController.class);

    protected QBOServiceHelper qbHelper;

    public QBOServiceHelper getQbHelper() {
        return qbHelper;
    }

    @Autowired
    public void setQbHelper(QBOServiceHelper qbHelper) {
        this.qbHelper = qbHelper;
    }
}
